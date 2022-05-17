
export function Menu ({categories}) {
    return(
        categories.map((category,i)=><li key={i}>{category}</li>)
    )

}