export default function Log({turns})
{
    return <ol id="log">
        {turns.map((turn) => 
        (<li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} selected {turn.square.row},{turn.square.col}
            </li>  
        ))}
       {/* // whenever printing dynamically one should use key */}
        
    </ol>
}