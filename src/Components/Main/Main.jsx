import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import { Context } from '../../Context/Context'
import SpeechRecognition,{useSpeechRecognition} from 'react-speech-recognition'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Main = () => {
    const {  
        onSent,
        recentPrompt,
        showResult,
        loading,
        resultData,input,
        setInput}=useContext(Context);


        //microphone k elements
        const{
            listening,
            transcript,
            resetTranscript,
            browserSupportsSpeechRecognition
        }=useSpeechRecognition();

        // useeffect tbi chlega agar ham mic ko click kre and y input box m voice and key dono s likhne m madad krega
        useEffect(()=>{
            if(transcript && listening){
                setInput(prevVal=>prevVal+transcript);
                resetTranscript();
            }
        },[transcript,listening,resetTranscript,setInput])
        
        if(!browserSupportsSpeechRecognition)
        {
            return <span>Your browser is not compatible</span> 
               }


               //y agar enter press krenge tw send hojaiga
               const handleKeyDown=(e)=>{
                    if (e.key === 'Enter') {
                        onSent(input);         
               }
            }

            //abi mic k state ko off krdia and y mic k color dekhega
            const[micActive,setMicActive]=useState(false);

            const handleMicClick=()=>{
                //toggle 
                setMicActive(true)
                SpeechRecognition.startListening()
            }

            const handleSend=()=>{
                onSent(input);
                if(listening)
                {
                    SpeechRecognition.stopListening();
                }
                setInput(""); //reset mic state after sending
            }

            const handleStop=()=>{
                SpeechRecognition.stopListening();
                setInput("");
            }

            //mic styling
            const micStyle = {
                border: listening ? '2px solid blue' : null , // Change border color based on state
                borderRadius: '50%', // Make it look good with rounded corners
                //padding: '10px', // Add some padding
                //cursor: 'pointer' // Add a pointer cursor for better UX
              };
        
              const [isDarkMode,setIsDarkMode]=useState(false);

              const toggleTheme=()=>{
                setIsDarkMode(!isDarkMode);
                
              }
              //Language change

              const {t}=useTranslation();



  return (
    <div  className={isDarkMode? 'app dark-mode main':'app light-mode main' }>
        
        <div className="nav">
            <p style={{fontSize:"25px", fontWeight:"700"}} className={isDarkMode?'navColorDark':'navColorWhite' } > Ask me&#128161;</p>
            <div style={{marginLeft:"470px", fontWeight:"600", cursor:"pointer" }} className={isDarkMode?'navColorDark':'navColorWhite'}> 
               <NavLink to='/language' 
               style={{marginLeft:"120px" , textDecoration:"none"}} className="Language">Language</NavLink> 
            </div>
            <div>
                {/* <img src={assets.dark} onClick={toggleTheme } style={{cursor:"pointer" , padding:"10px" , marginLeft:"120px" , marginTop : "10px" }} className='toggle-button'/> */}
                <button onClick={toggleTheme} className="toggle-button"
                style={{marginLeft:"20px" , borderRadius:"100%" , padding:'7px' ,height:"35px",width:"35px" , cursor:'pointer'}} >{isDarkMode? <img src={assets.sun} style={{height:"18px" , width:"18px"}}/>: <img src={assets.dark}  style={{height:"20px" , width:"20px"}}/>  }</button>
            </div>
            <img src={assets.chatbot} style={{height:"60px", width:"60px"}} />
        </div>
        <div className="main-container">
            {!showResult ?<>
                <div className="greet">
                <p><span>{t("one")}...</span></p>
                <p><span className='span2'>{t("two")}</span></p>
            </div>
            <div className='cards'>
                <div className="card">
                    <p>{t("first")} </p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p> {t("second")}</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>{t("third")}</p>
                    <img src={assets.message_icon} alt="" />
                </div>  
                <div className="card">
                    <p>{t("fourth")} </p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>
            :
            <div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon}  alt="image" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data  ">
                    <img src={assets.gemini_icon}/>
                   {
                    loading ? <div className='loader'>             
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                   }
                </div>
            </div>
            }
            
           
            <div className="main-bottom">

            {loading && (
        <div className='stopIcon' onClick={handleStop}>
        <img src={assets.stopIcon} className="stopIconImg" />Stop
        </div>
    )}
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} 
                    
                    value={input}
                    type="text" 
                    placeholder={t("sixth")} 
                    onKeyDown={handleKeyDown}
                     />
                    <div>
                        {/* <img src={assets.gallery_icon} alt="" /> */}
                        <img src={assets.mic_icon} onClick={handleMicClick} style={micStyle} alt="" />
                       {
                           input?
                     <img onClick={()=>handleSend} 
                
                     src={assets.send_icon} alt="" />
                      :null }
                   

                     </div>
                </div>
                <p className={isDarkMode?'paraColor bottom-info':'light-mode bottom-info'}>
                    Ask Me &#128161; {t('fifth')}
                </p>
            </div>
        </div>
    </div>
  ) 
}

export default Main;