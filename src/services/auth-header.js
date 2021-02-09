export default function authHeader(){
    let user = JSON.parse(localStorage.getItem('user'));

    if(user && user.accessToken){
        // return {Authorization:'Bearer' + uer.accessToken};
        return { 'x-access-token': user.accessToken };

    }else {
        return{};
    }
}