import { useCallback, useEffect, useState } from 'react'
import './App.css'
//import { socket } from './modules/socket'

function App() {
  const [numbercomparison, updateNumbercomparison] = useState<string>('')
  const [mynumber, updateMynumber] = useState<number>(0)
  const [isthreeusers, updateIsthreeusers] = useState<boolean>(false)
  const [forme,setForme] = useState<boolean[][]>([[false,false,false],[false,false,false],[false,false,false]])
  // useEffect(() => {
  //   socket.off('reponse')
  //   socket.off('reponse_utilisateurs')
  //   // socket.on('number message', (msg: string) => {
  //   //   console.log('new message received', msg)
  //   //   updateNumbercomparison(msg);
  //   // })
  //   socket.on('reponse_utilisateurs', (reponseBoolean: boolean) => {
  //     updateIsthreeusers(reponseBoolean);
  //   })
  //   socket.on('reponse', (reponseString: string) => {
  //     updateNumbercomparison(reponseString);
  //   })


  //   return () => {
  //     socket.off('reponse')
  //     socket.off('reponse_utilisateurs')
  //   }
  // })

  const handleChange = useCallback((i:number,j:number)=>{
    let matrice = [...forme];
    matrice[i][j]=true;
    setForme(matrice);
  },[forme])
  return (
    <div>
      <div className='cadre'>
        <div className='line'>
          <div className='box' onClick={() => handleChange(0,0)}>
            {forme[0][0]?
            <div className='symbol'>X</div>:
            <div></div>}
          </div>
          <div className='box' onClick={() => handleChange(0,1)}>
          {forme[0][1]?
            <div className='symbol'>X</div>:
            <div></div>}
          </div>
          <div className='box' onClick={() => handleChange(0,2)}>
          {forme[0][2]?
            <div className='symbol'>X</div>:
            <div></div>}
          </div>
        </div>
        <div className='line'>
          <div className='box' onClick={() => handleChange(1,0)}>
          {forme[1][0]?
            <div className='symbol'>X</div>:
            <div></div>}
          </div>
          <div className='box' onClick={() => handleChange(1,1)}>
          {forme[1][1]?
            <div className='symbol'>X</div>:
            <div></div>}
          </div>
          <div className='box' onClick={() => handleChange(1,2)}>
          {forme[1][2]?
            <div className='symbol'>X</div>:
            <div></div>}
          </div>
        </div>
        <div className='line'>
          <div className='box' onClick={() => handleChange(2,0)}>
          {forme[2][0]?
            <div className='symbol'>X</div>:
            <div></div>}
          </div>
          <div className='box' onClick={() => handleChange(2,1)}>
          {forme[2][1]?
            <div className='symbol'>X</div>:
            <div></div>}
          </div>
          <div className='box' onClick={() => handleChange(2,2)}>
          {forme[2][2]?
            <div className='symbol'>X</div>:
            <div></div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
