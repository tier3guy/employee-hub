export default function Badge({ type }: { type: "Active" | "Inactive" }) {
    const getStyles = () => {
        switch (type) {
            case "Active":
                return "h-2 w-2 bg-green-500/80 rounded-full";
            case "Inactive":
                return "h-2 w-2 bg-red-500/80 rounded-full";
            default:
                return "";
        }
    };

    return (
        <div className="flex items-center gap-2">
            <div className={getStyles()} />
            <p>{type}</p>
        </div>
    );
}
