import ButtonAppBar from "../componenets/mui-componenets/ButtonAppBar";
import MyCard from "../componenets/mui-componenets/MyCard";
import BasicTextFields from "../componenets/mui-componenets/BasicTextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import './style.css'
import ContainedButtons from "../componenets/mui-componenets/ContainedButtons";
function LogIn(){
    return(
        <>
<ButtonAppBar title='Profile' sideTitle='Signup' page1='/profile' page2='/signup'/>
<Container>
<Grid mt={5} container justifyContent="center">
  <Grid item xs={12} lg={6} md={10}>
    
<MyCard>
<h1 className='margin'> Login Form: </h1>
<BasicTextFields filled='Email'/>
<BasicTextFields filled='Password'/>
<ContainedButtons btn='Login'/>


    </MyCard>

    </Grid>
    </Grid>
    </Container>

        </>
    );
}


export default LogIn;