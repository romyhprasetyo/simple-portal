import Container from "@/components/Container";
export default function Footer(){
    let today: object = new Date();
    // @ts-ignore
    let date: string = today.getFullYear();
    return(
        <footer>
            <Container>
                <div className="text-center text-white/60 py-6">
                    Copyright &copy; {date}
                </div>
            </Container>
        </footer>
    )
}