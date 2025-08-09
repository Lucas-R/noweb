import { useZipcode } from '@hooks/useZipcode'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    const { data } = useZipcode("05763390");

    console.log(data);

    return (
        <div className="p-2">
            <h3>Welcome Home!</h3>
        </div>
    )
}