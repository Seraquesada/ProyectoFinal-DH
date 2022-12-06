/*import Header from '../header/Header.jsx';
//import Footer from "../footer/Footer";
//import {useEffect} from 'react';
//import Swal from "sweetalert2";

//function ReservaExitosa(){

//    useEffect(()=>{
//        mostrarAlerta();
//    }, []);

 //   const mostrarAlerta=()=>{
    if (validatorAll() === true) {
        localStorage.setItem("reservation", JSON.stringify(reservation)){
 //       Swal.fire(
 //           {
  //              title: '¡Muchas gracias!',
  //              text: 'Su reserva se ha realizado con éxito',
 //                icon: 'success'
 //            }
 //        );
 //    };
        };
  
        setNameR(reservation.name)
        setLastnameR(reservation.lastname)
        setEmailR(reservation.email)
  
        setsubBoolDos(true)
  
  
        setName({ field: "", valid: null });
        setLastname({ field: "", valid: null });
        setEmail({ field: "", valid: null });
        setCity({ field: "", valid: null });
  
  
      } else {
        // Swal.fire({
        //   icon: "error",
        //   title: "Error",
        //   text: "Porfavor complete el formulario",
        // });
      }
  
    };
  
    const onChangeName = ({ currentTarget }) =>{
  
      setName({ ...name, field: currentTarget.value });
      setNameR(currentTarget.value)
    }
    const onChangeSurname = ({ currentTarget }) =>{
  
      setSurnameR(currentTarget.value)
      setSurname({ ...Surname, field: currentTarget.value });
    }
    const onChangeEmail = ({ currentTarget }) =>{
  
      setEmailR(currentTarget.value)
      setEmail({ ...email, field: currentTarget.value });
    }
  
  
    const expressions = {
      name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letters and spaces can carry accents.
      surname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //Letters and spaces can carry accents.
      email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  
    };
  
    const validatorName = () => {
      if (expressions.name.test(name.field)) {
        setName({ ...name, valid: false });
      } else {
        setName({ ...name, valid: true });
      }
    };
  
    const validatorSurname = () => {
      if (expressions.Surname.test(Surname.field)) {
        setSurname({ ...Surname, valid: false });
      } else {
        setSurname({ ...Surname, valid: true });
      }
    };
  
    const validatorEmail = () => {
      if (expressions.email.test(email.field)) {
        setEmail({ ...email, valid: false });
      } else {
        setEmail({ ...email, valid: true });
      }
    };
  
    const validatorAll = () => {
      if (
        name.field === "" ||
        name.valid === true ||
        lastname.field === "" ||
        lastname.valid === true ||
        email.field === "" ||
        email.valid === true ||
        city.field === "" ||
        city.valid === true
      ) {
        return false
      } else {
        return true
      }
    };

 //    return (
//         <div>
 //        <Header />
 //        <ReservaExitosa/>
 //        <Footer />
//         </div>
 //    );
//};

//export default ReservaExitosa;
*/
