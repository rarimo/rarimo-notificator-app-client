import { useEffect } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import RarimeNotificator from '@/pages/notificator/RariMeNotificator'
import UnitedSpaceNotificator from '@/pages/notificator/UnitedSpaceNotificator'
import ProjectSelect from '@/pages/projectSelect/ProjectSelect'

import { AppTopBar } from './common'
import { RoutePaths } from './enums'

function useTitle(title: string) {
  useEffect(() => {
    document.title = title
  }, [title])
}

function RouteWithTitle({ title, element }: { title: string; element: JSX.Element }) {
  useTitle(title)
  return element
}

export const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: RoutePaths.Root,
      element: (
        <>
          <AppTopBar />
          <Outlet />
        </>
      ),
      children: [
        {
          path: RoutePaths.RariMe,
          element: <RouteWithTitle title='RariMe' element={<RarimeNotificator />} />,
        },
        {
          path: RoutePaths.UnitedSpace,
          element: <RouteWithTitle title='United Space' element={<UnitedSpaceNotificator />} />,
        },
        {
          path: RoutePaths.Root,
          element: <ProjectSelect />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
