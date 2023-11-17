import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'

export const BugButton = () => {
    const [error, setError] = useState(false)
    const { t } = useTranslation()
    const onThrowError = () => {
        setError(prev => !prev)
    }
    useEffect(() => {
        if (error) throw new Error()
    })
    return (
        <Button onClick={onThrowError}>{t("Выбросить ошибку")}</Button>
    )
}