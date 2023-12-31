import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }
    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className
            ])}
            data-testid="sidebar"
        >
            <button onClick={onToggle} data-testid="sidebar-toggle">toggle</button>
            <div className={cls.switchers}>
                <LangSwitcher className={cls.lang} />
                <ThemeSwitcher className={''} />
            </div>
        </div>
    )
}
