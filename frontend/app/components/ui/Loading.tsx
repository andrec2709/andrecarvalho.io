import SyncIcon from "./icons/SyncIcon";

const Loading = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <SyncIcon size={48} className="animate-spin" color="var(--primary)" />
        </div>
    );
};

export default Loading;