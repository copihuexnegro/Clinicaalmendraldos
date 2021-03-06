import React from 'react'
import {Grid, makeStyles, Typography,Button} from '@material-ui/core'




 const estilos=makeStyles((theme)=>({


                root:{
                  "&  .MuiButton-contained:hover": {
                        boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
                        backgroundColor:" #d5d5d59e"
                    }


                },



         divRojo:{
                height:"50vh",
                width:"50vw",
                color:"#ffffff",
                background: "rgb(245, 0, 87)",
                padding:"7%",
                minHeight: "216px"


         },
         
          btnRojo:{

            background:"#e9415500",
            color: "#ffffff",
            border:"#ffffff solid 1px"
          },

         
         divAmarillo:{

            height:"50vh",
            width:"50vw",
            color:"#ffffff",
            background: "rgb(226, 168, 46)",
            padding:"7%",
            minHeight: "216px"




         },
         divAzul:{
            height:"50vh",
            width:"50vw",
            color:"#ffffff",
            background: "rgb(34, 96, 136)",
            padding:"7%",
            minHeight: "216px"


         },
         divCalipso:{
            height:"50vh",
            width:"50vw",
            color:"#ffffff",
            background: "rgb(95, 206, 214)",
            padding:"7%",
            minHeight: "216px"


            
         } 



 }))

const Cajitasdos = () => {

    const clases=estilos()
    return (
        <div className={clases.root}>

            <Grid container>

                 <Grid xs={6}>
                     <div className={clases.divRojo}>

                              <Grid container>

                              <Grid xs={12}>
                              <img src="./imagenes/ortodoncia.png" height="45"  /> 
                                  
                                  </Grid>  
                                  
                              <Grid xs={12}>
                                  
                                <Typography variant="h6" align="left">

                                    Ortodoncia


                                </Typography>  


                                <Typography variant="subtitle1" align="left">

                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...


                                 </Typography>  

                                 <Typography variant="subtitle1" align="right">
                                        <Button variant="contained"  className={clases.btnRojo}>

                                                    ver mas 

                                        </Button>
                                </Typography>  








                                </Grid>  

                               </Grid>  



                     </div>
                 </Grid> 
                 <Grid xs={6}>

                        <div className={clases.divAzul}>


                        <Grid container>

<Grid xs={12}>
<img src='./imagenes/odontopediatria.png' height="45"  /> 
    
    </Grid>  
    
<Grid xs={12}>
    
  <Typography variant="h6" align="left">

      Odontopediatria


  </Typography>  


  <Typography variant="subtitle1" align="left">

        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...


   </Typography>  

   <Typography variant="subtitle1" align="right">
          <Button variant="contained"  className={clases.btnRojo}>

                      ver mas 

          </Button>
  </Typography>  








  </Grid>  

 </Grid>  



                        </div>
                  </Grid>  

                 <Grid xs={6}>
                        <div className={clases.divCalipso}>



                        <Grid container>

<Grid xs={12}>
<img src="./imagenes/estetica.png" height="45"  /> 
    
    </Grid>  
    
<Grid xs={12}>
    
  <Typography variant="h6" align="left">
   


            Estetica


  </Typography>  


  <Typography variant="subtitle1" align="left">

        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...


   </Typography>  

   <Typography variant="subtitle1" align="right">
          <Button variant="contained"  className={clases.btnRojo}>

                      ver mas 

          </Button>
  </Typography>  








  </Grid>  

 </Grid>  



                        </div>
                 </Grid> 
                 <Grid xs={6}>
                         <div className={clases.divAmarillo}>



                         <Grid container>

<Grid xs={12}>
<img src="./imagenes/implantes.png" height="45"  /> 
    
    </Grid>  
    
<Grid xs={12}>
    
  <Typography variant="h6" align="left">

      Implantes


  </Typography>  


  <Typography variant="subtitle1" align="left">

        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...


   </Typography>  

   <Typography variant="subtitle1" align="right">
          <Button variant="contained"  className={clases.btnRojo}>

                      ver mas 

          </Button>
  </Typography>  








  </Grid>  

 </Grid>  



                         </div>
                  </Grid>       
          
     
          




            </Grid>







            
        </div>
    )
}

export default Cajitasdos
