import { HeroList } from '../hero/HeroList'


export const MarvelScreen = () => {
    return (
        <div>
            <section class="footer">
                <div className='creditt'>
            <h1>VINO</h1>
            </div>
                </section>
            <hr />

            <HeroList publisher="Marvel Comics" />

        </div>
    )
}
