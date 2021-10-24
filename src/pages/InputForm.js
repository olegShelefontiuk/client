import React, {useState} from "react";
import ImgBg2 from '../img/dom-2.png'
import ImgBg3 from '../img/dom-3.png'
import ImgBg4 from '../img/dom-4.png'
import ImgBg5 from '../img/dom-5.png'
import ImgBg6 from '../img/dom-6.png'
import styled from "styled-components";
import {create} from "./api"


const FormContainer = styled.div`!important;
  background-color: white;
  //max-height: 128vh;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  display: block;

`;

 const FormWallpaper = styled.div`
  background-image: 
  url(${ImgBg2}) !important;
   background-repeat: no-repeat;
   height: 230px;
  width: 90%;
  position: relative;
   //left: -30px;
   margin-left: auto;
   margin-right: auto;
  bottom: 0px;

   @media screen and (max-width: 1000px) {
     background-image:
             url(${ImgBg3}) !important;
   }
   @media screen and (max-width: 700px) {
     background-image:
             url(${ImgBg4}) !important;
     //margin-left: -20px;
   }
   @media screen and (max-width: 500px) {
     background-image:
             url(${ImgBg5}) !important;
     //margin-left: -20px;
   }
   @media screen and (max-width: 415px) {
     background-image:
             url(${ImgBg6}) !important;
     //margin-left: -20px;
   }
   
  //@media screen and (min-height: 500px) {
  //  display: none;
  //}
  @media screen and (max-width: 600px) {
    width: 60%;
  }
  `

const Container = styled.div`
  margin-top: 40px;
  margin-bottom: 19px;
  justify-content: center;
  
    @media screen and (max-width: 800px) {
    margin-left: 10px;
  }
`

const FormSubmitButton = styled.button`
  width: 40%;
  margin-left: 54%;
  margin-bottom: 50px;
  margin-top: 2rem;
  @media screen and (max-width: 500px) {
    font-size: .8rem;
  }
`

const Form = styled.form`
  display: block;
  border-style: initial!important;
  /*width: 35rem!important;*/
  box-shadow: 1px 1px 1px 1px lightblue, 1px 1px .4em lightblue !important;

  position: relative !important;

  @media screen and (max-width: 1000px) {
    font-size: .8rem;
    width: 20rem;
  }
  @media screen and (max-width: 600px) {
    width: 15rem;
  }
`




export const InputForm = () =>{

    const [values, setValues] = useState({
        name: '',
        email: '',
        message:'',
        error: ''
    })

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const clickSubmit = () => {
        const user = {
            name: values.name || undefined,
            email: values.email || undefined,
            message: values.message || undefined
        }
        create(user).then((data) => {
            if (data.error) {
                setValues({ ...values, error: data.error})
            } else {
                setValues({ ...values, error: '', open: true})
            }
        })
    }

    return(
        <FormContainer>

        <Container className="row" >


            <Form  >
                <div className="col-md4 form-margin container">
                    <h5 className="margin">Reach out to us!</h5>
                    <input type="text" className="form-control form-margin" name="Name" id="name"  placeholder="Your name"
                           value={values.name} onChange={handleChange('name')}
                    />
                    <input type="email" className="form-control form-margin" name="Email" typeof="email"
                           id="email" placeholder="Your email address"
                           value={values.email} onChange={handleChange('email')}
                    />
                    <textarea className="form-control form-margin"
                           rows="5"
                           cols="50"
                           name="message"
                              id="message"
                              placeholder="Leave a message"
                              value={values.message} onChange={handleChange('message')}
                    />
                </div>
                <FormSubmitButton type="submit" className="btn btn-warning " onClick={clickSubmit} >Submit Now</FormSubmitButton>
            </Form>
            <FormWallpaper />
        </Container>
        </FormContainer>
    )
}