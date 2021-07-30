import Link from 'next/link';
import {useGet, usePost} from 'src/commons/ajax';
import {setToken} from 'src/commons';

export default function About() {
    const {data} = usePost('/login', {account: 'admin', password: '123456'}, [], {
        formatResult: res => {
            const {token} = res;
            setToken(token);
            console.log(123, window);
        },
    });

    // src/pages/api中定义的优先级高
    const {data: users} = useGet('/user/queryUsersByPage', {pageSize: 20, pageNum: 1}, []);
    // console.log(data);
    // console.log(users);

    return (
        <div>
            关于我们页面
            <div>
                <Link href="/">返回首页</Link>
            </div>
            {JSON.stringify(users, null, 4)}
        </div>
    );
}
