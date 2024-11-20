import Print from '@mui/icons-material/Print'
import Timer from '@mui/icons-material/Timer'
import TimerOutlined from '@mui/icons-material/TimerOutlined'
import { SvgIcon } from '@mui/material'

export enum Icons {
  ArrowCounterClockwise = 'arrow-counter-clockwise',
  ArrowDown = 'arrow-down',
  ArrowLeft = 'arrow-left',
  ArrowRight = 'arrow-right',
  ArrowSquareOut = 'arrow-square-out',
  ArrowUp = 'arrow-up',
  Backspace = 'backspace',
  BellFill = 'bell-fill',
  Bell = 'bell',
  CalendarBlank = 'calendar-blank',
  CardholderFill = 'cardholder-fill',
  Cardholder = 'cardholder',
  CaretLeft = 'caret-left',
  CaretRight = 'caret-right',
  CaretUpDown = 'caret-up-down',
  CaretUp = 'caret-up',
  CarretDown = 'carret-down',
  ChartBarFill = 'chart-bar-fill',
  ChartBar = 'chart-bar',
  ChartLine = 'chart-line',
  Check = 'check',
  Close = 'close',
  CopySimple = 'copy-simple',
  Discord = 'discord',
  DotsSixVertical = 'dots-six-vertical',
  DotsThreeOutline = 'dots-three-outline',
  Facebook = 'facebook',
  Fingerprint = 'fingerprint',
  Flag = 'flag',
  GiftFill = 'gift-fill',
  Gift = 'gift',
  Headset = 'headset',
  History = 'history',
  House = 'house',
  HouseSimpleFill = 'house-simple-fill',
  HouseSimple = 'house-simple',
  IdentificationCardFill = 'identification-card-fill',
  IdentificationCard = 'identification-card',
  Image = 'image',
  Infinite = 'infinite',
  Info = 'info',
  Instagram = 'instagram',
  Key = 'key',
  Link = 'link',
  LockFill = 'lock-fill',
  Lock = 'lock',
  Logout = 'logout',
  MagnifyingGlass = 'magnifying-glass',
  MapPin = 'map-pin',
  Moon = 'moon',
  Palette = 'palette',
  Password = 'password',
  PencilSimpleLine = 'pencil-simple-line',
  Plus = 'plus',
  QrCode = 'qr-code',
  QuestionFill = 'question-fill',
  Question = 'question',
  App = 'app',
  SealCheck1 = 'seal-check-1',
  SealCheck = 'seal-check',
  Share1 = 'share-1',
  Share = 'share',
  ShieldCheck = 'shield-check',
  SlidersHorizontal = 'sliders-horizontal',
  StackSimpleFill = 'stack-simple-fill',
  StackSimple = 'stack-simple',
  StarFill = 'star-fill',
  StarFour = 'star-four',
  Star = 'star',
  SuitcaseSimpleFill = 'suitcase-simple-fill',
  SuitcaseSimple = 'suitcase-simple',
  Sun = 'sun',
  Swap = 'swap',
  Telegram = 'telegram',
  ThumbsDown = 'thumbs-down',
  ThumbsUp = 'thumbs-up',
  TrashSimple = 'trash-simple',
  TrophyFill = 'trophy-fill',
  Trophy = 'trophy',
  Twitter = 'twitter',
  TwitterX = 'twitter-x',
  UserCircle = 'user-circle',
  UserFocus = 'user-focus',
  User = 'user',
  UserPlus = 'user-plus',
  Users = 'users',
  WalletFilled = 'wallet-filled',
  Wallet = 'wallet',
  Warning = 'warning',
  XCircle = 'x-circle',
  Points = 'points',
  Eye = 'eye',
}

export const ICON_COMPONENTS: Record<string, typeof SvgIcon> = {
  print: Print,
  timer: Timer,
  timerOutlined: TimerOutlined,
}