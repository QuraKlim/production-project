import 'app/styles/index.scss'
import { ReactElement, Suspense } from 'react'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'

export const SuspenseDecorator = (StoryComponent: () => ReactElement) => {
    return <Suspense fallback={<PageLoader />}>{<StoryComponent />}</Suspense>
}