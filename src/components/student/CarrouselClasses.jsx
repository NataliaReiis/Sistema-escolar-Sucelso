import Button from "../Button"

export default function CarrouselClass(props){
    return(
        <>
                <div className="content-carrousel" style={{backgroundColor:props.color}}>
                    <h3>{props.subTitle}</h3>
                    <h3>{props.aula}</h3>
                    <Button text="Assistir" color="third" size="medium"></Button>
                </div>

          
        </>
    )
}