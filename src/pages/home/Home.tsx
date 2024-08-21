
function Home() {
  return (
    <div style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center"
    }}>
        <div style={{
            width: "80vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <div>
                <h2>Seja Bem Vindo!</h2>
                <p>Expresse aqui seus pensamentos e opiniões</p>
            </div>

            <div >
            <img src="https://i.imgur.com/VpwApCU.png" alt="Imagem da Página Home" width="400px"/> 
            </div>
                
        </div>
    </div>
  )
}

export default Home