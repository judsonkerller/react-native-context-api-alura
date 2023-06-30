import { createContext, useState } from "react";

export const AutenticacaoContext = createContext({});

export function AutenticacaoProvider({ children }) {
   const [usuario, setUsuario] = useState({});

   function login(email, senha) {
      if(email === 'teste@teste.com' && senha === '123456') {
         setUsuario({
            nome: 'Judson',
            email: email,
            endereco: 'Residencial Dom',
            telefone: '(84) 98831-3543'
         })
         return 'ok'
      } else {
         return 'Dados de login e senha estão incorretos';
      }
   }

   return(
      <AutenticacaoContext.Provider value={{
         usuario,
         login,
      }}>
      {children}
      </AutenticacaoContext.Provider>
  )
}