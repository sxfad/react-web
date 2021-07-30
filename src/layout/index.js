import Nav from './nav';

export default function Layout(props) {

    const {children} = props;

    return (
        <div>
            <Nav/>
            <main>
                {children}
            </main>
        </div>
    );
}
