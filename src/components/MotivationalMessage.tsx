interface MotivationalMessageProps {
    message: string
    author: string
}

export function MotivationalMessage(props: MotivationalMessageProps) {
    return (
        <>
            <section style={{
                    backgroundColor: "#8c8c8c",
                    padding: "10px",
                    borderRadius: "10px"
                }}>

                <h1 style={{
                    textAlign: "center"
                }}>{props.message}</h1>
                
                <p style={{
                    textAlign: "center"
                }}>{props.author}</p>
            </section>
        </>
    )
}