import {
  Autocomplete,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from '@mui/material'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useCallback } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { firebaseState } from '@/store/modules/firebase.module'
import removeBadValues from '@/util/removeBadElevent'

import {
  NotificationRequest,
  NotificationTarget,
  notificationTargetToString,
} from '../../api/firebase/modules/FirebaseModule'

export const enum ProjectType {
  RariMe,
  UnitedSpace,
}

type Props = {
  topic: string[]
  type: string[]
  project: ProjectType
}

enum FieldNames {
  Topic = 'topic',
  Type = 'type',
  Header = 'header',
  Description = 'description',
  Target = 'target',
}

interface DynamicFieldDefinition {
  name: string
  label: string
  type: 'string' | 'string[]'
  options?: string[]
}

interface FormData {
  [FieldNames.Topic]: string
  [FieldNames.Type]: string
  [FieldNames.Header]: string
  [FieldNames.Description]: string
  [FieldNames.Target]: NotificationTarget
  dynamicFields: { [key: string]: string | Array<string> }
}

const DEFAULT_VALUES: FormData = {
  [FieldNames.Topic]: '',
  [FieldNames.Type]: '',
  [FieldNames.Header]: '',
  [FieldNames.Description]: '',
  [FieldNames.Target]: NotificationTarget.AndroidAndIOS,
  dynamicFields: {},
}

export default function DefaultNotificator({ topic, type, project }: Props) {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
    watch,
  } = useForm<FormData>({
    defaultValues: DEFAULT_VALUES,
    mode: 'onBlur', // Validates on blur for better UX
  })

  // Watch the type field
  const selectedType = watch(FieldNames.Type) as string

  const getFieldsByType = (type: string): DynamicFieldDefinition[] => {
    switch (type) {
      case 'info':
        return []
      case 'rewardable':
        return [{ name: 'event_name', label: 'Event name', type: 'string' }]
      case 'universal':
        return [
          { name: 'event_type', label: 'Event type', type: 'string' },
          { name: 'nationality', label: 'Nationality', type: 'string' },
          {
            name: 'user_statuses',
            label: 'User Status',
            type: 'string[]',
            options: ['unscanned', 'waitlist', 'verified'],
          },
          { name: 'new_supported_circuit', label: 'Circuit', type: 'string' },
        ]
      default:
        return []
    }
  }

  const dynamicFields = getFieldsByType(selectedType || '')

  const submit = useCallback(
    async (formData: FormData) => {
      const target = notificationTargetToString(formData[FieldNames.Target] as NotificationTarget)

      const dynamicFieldsData = removeBadValues(formData.dynamicFields) || {}
      const contentJsonString = JSON.stringify(dynamicFieldsData)

      const request: NotificationRequest = {
        title: formData[FieldNames.Header],
        description: formData[FieldNames.Description],
        content: contentJsonString,
        target: target,
        topic: formData[FieldNames.Topic],
        type: formData[FieldNames.Type],
      }

      try {
        switch (project) {
          case ProjectType.RariMe:
            await firebaseState.sendNotificationRarime(request)
            break
          case ProjectType.UnitedSpace:
            await firebaseState.sendNotificationUnitedSpace(request)
            break
          default:
            throw new Error('Unknown project type: ' + project)
        }
      } catch {
        throw SyntaxError()
      }
    },
    [project],
  )

  return (
    <form noValidate onSubmit={handleSubmit(submit)}>
      <Card
        sx={{
          width: 2000,
          padding: 4,
          maxWidth: 600,
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography
          variant='h5'
          component='div'
          textAlign='center'
          gutterBottom
          sx={{ fontWeight: 'bold', color: 'primary.main' }}
        >
          Create a new notification
        </Typography>
        <Typography
          variant='body2'
          component='div'
          textAlign='center'
          gutterBottom
          sx={{ marginBottom: 3, color: 'text.secondary' }}
        >
          Fill in the details below to create your notification
        </Typography>
        <Stack spacing={3}>
          {/* Topic and Type Autocomplete */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent='space-between'
            sx={{ width: '100%' }}
          >
            {/* Topic Autocomplete */}
            <Controller
              name={FieldNames.Topic}
              control={control}
              defaultValue=''
              rules={{
                required: 'Topic is required',
                minLength: { value: 2, message: 'Topic must be at least 2 characters' },
                maxLength: { value: 50, message: 'Topic must be at most 50 characters' },
              }}
              render={({ field }) => (
                <FormControl fullWidth error={Boolean(errors[FieldNames.Topic])}>
                  <Autocomplete
                    {...field}
                    value={field.value || ''}
                    onChange={(event, newValue) => {
                      field.onChange(newValue || '')
                    }}
                    options={topic}
                    freeSolo
                    disabled={isSubmitting}
                    renderInput={params => (
                      <TextField
                        {...params}
                        label='Topic'
                        variant='outlined'
                        error={Boolean(errors[FieldNames.Topic])}
                        helperText={errors[FieldNames.Topic]?.message}
                      />
                    )}
                  />
                </FormControl>
              )}
            />

            {/* Type Autocomplete */}
            <Controller
              name={FieldNames.Type}
              control={control}
              defaultValue=''
              rules={{
                required: 'Type is required',
                minLength: { value: 2, message: 'Type must be at least 2 characters' },
                maxLength: { value: 50, message: 'Type must be at most 50 characters' },
              }}
              render={({ field }) => (
                <FormControl fullWidth error={Boolean(errors[FieldNames.Type])}>
                  <Autocomplete
                    {...field}
                    value={field.value || ''}
                    onChange={(event, newValue) => {
                      field.onChange(newValue || '')
                    }}
                    options={type}
                    freeSolo
                    disabled={isSubmitting}
                    renderInput={params => (
                      <TextField
                        {...params}
                        label='Type'
                        variant='outlined'
                        error={Boolean(errors[FieldNames.Type])}
                        helperText={errors[FieldNames.Type]?.message}
                      />
                    )}
                  />
                </FormControl>
              )}
            />
          </Stack>

          {/* Header */}
          <Controller
            name={FieldNames.Header}
            control={control}
            defaultValue=''
            rules={{
              required: 'Header is required',
              minLength: { value: 3, message: 'Header must be at least 3 characters' },
              maxLength: { value: 100, message: 'Header must be at most 100 characters' },
            }}
            render={({ field }) => (
              <FormControl fullWidth error={Boolean(errors[FieldNames.Header])}>
                <TextField
                  {...field}
                  id='header'
                  label='Header'
                  variant='outlined'
                  fullWidth
                  disabled={isSubmitting}
                  error={Boolean(errors[FieldNames.Header])}
                  helperText={errors[FieldNames.Header]?.message}
                />
              </FormControl>
            )}
          />

          {/* Description */}
          <Controller
            name={FieldNames.Description}
            control={control}
            defaultValue=''
            rules={{
              required: 'Description is required',
              minLength: { value: 10, message: 'Description must be at least 10 characters' },
              maxLength: { value: 500, message: 'Description must be at most 500 characters' },
            }}
            render={({ field }) => (
              <FormControl fullWidth error={Boolean(errors[FieldNames.Description])}>
                <TextField
                  {...field}
                  id='description'
                  label='Description'
                  variant='outlined'
                  fullWidth
                  multiline
                  minRows={3}
                  disabled={isSubmitting}
                  error={Boolean(errors[FieldNames.Description])}
                  helperText={errors[FieldNames.Description]?.message}
                />
              </FormControl>
            )}
          />

          {/* Dynamic Fields (Ignored for Validation) */}
          {dynamicFields.length > 0 && (
            <Stack spacing={2}>
              {dynamicFields.map(fieldDef => {
                if (fieldDef.type === 'string[]') {
                  // Render checkboxes for string[] fields
                  return (
                    <Controller
                      key={fieldDef.name}
                      name={`dynamicFields.${fieldDef.name}`}
                      control={control}
                      defaultValue={[]}
                      render={({ field }) => (
                        <FormControl component='fieldset' fullWidth>
                          <FormLabel component='legend'>{fieldDef.label}</FormLabel>
                          <FormGroup>
                            {fieldDef.options?.map(option => (
                              <FormControlLabel
                                key={option}
                                control={
                                  <Checkbox
                                    checked={(field.value as string[])?.includes(option)}
                                    onChange={e => {
                                      if (e.target.checked) {
                                        field.onChange([
                                          ...((field.value as string[]) || []),
                                          option,
                                        ])
                                      } else {
                                        if (Array.isArray(field.value)) {
                                          field.onChange(
                                            (field.value as string[]).filter(
                                              item => item !== option,
                                            ),
                                          )
                                        }
                                      }
                                    }}
                                    disabled={isSubmitting}
                                  />
                                }
                                label={option}
                              />
                            ))}
                          </FormGroup>
                        </FormControl>
                      )}
                    />
                  )
                } else {
                  return (
                    <Controller
                      key={fieldDef.name}
                      name={`dynamicFields.${fieldDef.name}`}
                      control={control}
                      defaultValue=''
                      render={({ field }) => (
                        <FormControl fullWidth>
                          <TextField
                            {...field}
                            label={fieldDef.label}
                            variant='outlined'
                            fullWidth
                            disabled={isSubmitting}
                            value={field.value || ''}
                          />
                        </FormControl>
                      )}
                    />
                  )
                }
              })}
            </Stack>
          )}

          {/* Target */}
          <Controller
            name={FieldNames.Target}
            control={control}
            defaultValue={NotificationTarget.AndroidAndIOS}
            rules={{
              required: 'Target is required',
            }}
            render={({ field }) => (
              <FormControl component='fieldset' error={Boolean(errors[FieldNames.Target])}>
                <FormLabel component='legend'>Target</FormLabel>
                <RadioGroup
                  {...field}
                  aria-label='target'
                  name='target'
                  onChange={e => field.onChange(e.target.value)}
                  value={field.value || ''}
                >
                  <FormControlLabel
                    value={NotificationTarget.AndroidAndIOS}
                    control={<Radio />}
                    label={NotificationTarget.AndroidAndIOS}
                    disabled={isSubmitting}
                  />
                  <FormControlLabel
                    value={NotificationTarget.OnlyAndroid}
                    control={<Radio />}
                    label={NotificationTarget.OnlyAndroid}
                    disabled={isSubmitting}
                  />
                  <FormControlLabel
                    value={NotificationTarget.OnlyIOS}
                    control={<Radio />}
                    label={NotificationTarget.OnlyIOS}
                    disabled={isSubmitting}
                  />
                </RadioGroup>
                <FormHelperText>{errors[FieldNames.Target]?.message}</FormHelperText>
              </FormControl>
            )}
          />

          {/* Submit Button */}
          <Button variant='contained' type='submit' size='large' disabled={isSubmitting} fullWidth>
            {isSubmitting ? 'Sending...' : 'Send'}
          </Button>
        </Stack>
      </Card>
    </form>
  )
}
