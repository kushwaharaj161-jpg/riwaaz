import {useEffect,useState} from 'react';
import {AuthContext} from './AuthContext';
import api from '../api/axios';

export const AuthProvider=({children})=>{
 const [user,setUser]=useState(null); const [loading,setLoading]=useState(true);
 const checkAuth=async()=>{const t=localStorage.getItem('token'); if(!t){setLoading(false);return;}
 try{const {data}=await api.get('/auth/profile'); setUser(data);}catch{localStorage.removeItem('token'); setUser(null);}finally{setLoading(false);}};
 useEffect(()=>{checkAuth();},[]);
 const login=async(email,password)=>{const {data}=await api.post('/auth/login',{email,password}); if(data.token)localStorage.setItem('token',data.token); const u=data.user|| (await api.get('/auth/profile')).data; setUser(u); return u;};
 const logout=async()=>{localStorage.removeItem('token'); setUser(null); try{await api.post('/auth/logout');}catch{}};
 return <AuthContext.Provider value={{user,loading,login,logout,checkAuth}}>{children}</AuthContext.Provider>;
};