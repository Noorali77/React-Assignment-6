import ButtonAppBar from "../componenets/mui-componenets/ButtonAppBar";
import MyCard from "../componenets/mui-componenets/MyCard";
import BasicTextFields from "../componenets/mui-componenets/BasicTextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import './style.css'
import ContainedButtons from "../componenets/mui-componenets/ContainedButtons";
import RowRadioButtonsGroup from "../componenets/mui-componenets/RowRadioButonsGroup";
import Checkboxes from "../componenets/mui-componenets/CheckBoxes";
function SignUp(){
    return(
        <>
<ButtonAppBar title='Signup' sideTitle='Login' page1='/signup' page2='/'/>
<Container>
<Grid mt={5} container justifyContent="center">
  <Grid item xs={12} lg={6} md={10}>
    
<MyCard>
<h1 className='margin'> Signup Form: </h1>
<BasicTextFields filled='Name'/>
<BasicTextFields filled='Email'/>
<BasicTextFields filled='Password'/>
<RowRadioButtonsGroup/>

<Checkboxes/>

<ContainedButtons btn='Signup'/>


    </MyCard>

    </Grid>
    </Grid>
    </Container>

        </>
    );
}


export default SignUp;