import Link from "next/link";
export default function Custom404() {
    return (
        <>
            <p>Page not Found. <Link href="/">Go back to home</Link></p>
        </>
    )
}