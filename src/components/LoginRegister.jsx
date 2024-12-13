import { useState } from "react"

const Login = () => {
    const [register, setRegister] = useState(false);
    const [login, setLogin] = useState(false);

    return (
        <div className=' relative flex items-center justify-around h-full w-full overflow-hidden'>
            {/* Animação */}
            <div className={`hidden lg:flex absolute right-0 border border-blue-600/10 h-full w-[50%] backdrop-blur-md bg-blue-600/70 shadow-2xl shadow-blue-600/80 rounded-2xl duration-500  ${login ? 'right-0' : ''} ${register ? '-translate-x-full ' : ''}`}>
            </div>

            {/* Area de login */}

            {/* Versao desktop */}
            <div className={`h-full hidden sm:flex flex-col items-center justify-center `}>
                <form>
                    <div className='flex flex-col gap-2 mb-6'>
                        <label className='font-bold'>Usuário</label>
                        <input className='p-2 rounded' type="text" name="user" id="user" />
                    </div>
                    <div className='flex flex-col gap-2 mb-3'>
                        <label className='font-bold'>Senha</label>
                        <input className='p-2 rounded' type="password" name="password" id="password" />
                    </div>
                    <div className='flex flex-col'>
                        <a className='text-xs font-medium hover:text-blue-600 ' href="#">Esqueci minha senha</a>
                        <a onClick={() => {setRegister(true); () => setLogin(false)}} className='text-xs font-medium hover:text-blue-600 ' href="#">Quero me cadastrar</a>
                    </div>
                </form>
                <div className='flex items-center justify-center w-full mt-8'>
                    <button className='bg-blue-600/90 hover:bg-blue-600 py-2 w-full font-bold text-white rounded'>Entrar</button>
                </div>
            </div>

            {/* Area de registro */}

            {/* Versão desktop */}
            <div className={`hidden lg:flex h-full flex-col items-center justify-center`}>
                <form>
                    <div className='flex flex-col gap-2 mb-6'>
                        <label className='font-bold'>Nome e sobrenome</label>
                        <input className='p-2 rounded' type="text" name="user" id="user" />
                    </div>
                    <div className='flex flex-col gap-2 mb-6'>
                        <label className='font-bold'>Email</label>
                        <input className='p-2 rounded' type="text" name="user" id="user" />
                    </div>
                    <div className='flex flex-col gap-2 mb-3'>
                        <label className='font-bold'>Senha</label>
                        <input className='p-2 rounded' type="password" name="password" id="password" />
                    </div>
                    <div className='flex flex-col'>
                        <a onClick={() => {setLogin(true); setRegister(false)}} className='text-xs font-medium hover:text-blue-600 ' href="#">Já tenho uma conta</a>
                    </div>
                </form>
                <div className='flex items-center justify-center w-full mt-8'>
                    <button className='bg-blue-600/90 hover:bg-blue-600 py-2 w-full font-bold text-white rounded'>Entrar</button>
                </div>
            </div>
        </div>
    )
}

export default Login