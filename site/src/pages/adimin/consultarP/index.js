import './index.scss';

export default function Index() {
    return (
        <div className='comp-detalhe'>
            <img src='https://ingresso-a.akamaihd.net/img/cinema/cartaz/7766-cartaz.jpg' alt='' />
            <div className='box-info'>
                <h1>Harry Potter e a Pedra Filosofal</h1>
                <div className='info'>
                    <h3>Lançamento</h3>
                    <p>15/02/2020</p>
                </div>
                <div className='info'>
                    <h3>Sinopse</h3>
                    <p className='sinopse'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus pulvinar finibus. Etiam et finibus magna. Duis scelerisque hendrerit sem. Nullam cursus lectus at magna iaculis, eget egestas nibh malesuada. Aliquam ipsum magna, pharetra at dictum at, convallis et erat. Sed auctor euismod dolor in varius. Mauris in nunc eget risus tristique tempor. Sed semper euismod arcu, in euismod turpis volutpat non. Curabitur consequat pharetra purus id aliquet. Phasellus sagittis vitae urna quis placerat. Maecenas gravida risus ac vestibulum facilisis.</p>
                </div>
                <div className='info'>
                    <h3>Avaliação</h3>
                    <p>15/2020</p>
                </div>
                <div className='info'>
                    <h3>Disponível</h3>
                </div>
            </div>
        </div>
    )
}