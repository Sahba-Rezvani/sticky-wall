type ToolbarProps={
    onAdd: ()=>void,
}

export default function Toolbar({onAdd}:ToolbarProps){
    return(
        <div className="header_toolbar">
            <div className="toolbar--left">
                <p>All Notes (X Notes)</p>
            </div>
            <div className="toolbar--right">
                <button onClick={onAdd}>add new task +</button>
                <button>sort by</button>
            </div>

        
        </div>
    )
}