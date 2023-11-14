import { Route, Routes, Link } from 'react-router-dom'

import { AboutPage } from 'pages/AboutPage/index'
import { MainPage } from 'pages/MainPage/index'
import { Suspense } from 'react'
import { useTheme } from 'app/providers/ThemeProviders/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/ThemeProviders/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { useTranslation } from 'react-i18next'

export const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div></div>}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
