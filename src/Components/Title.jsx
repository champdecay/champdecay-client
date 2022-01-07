export default function Title({ children }) {
    return (
        <div className="mb-12">
            <h3 className="text-3xl text-center py-4">{children}</h3>
            <hr className="w-24 h-1 mx-auto border-t-2 border-indigo-700" />
        </div>
    )
}
