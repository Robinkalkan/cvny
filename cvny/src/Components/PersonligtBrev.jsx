import bild3 from '../assets/background.jpeg'
export default function () {
    return (
        <div className="background-image">
            <>
                <main>
                    <h1 className="PersonligtBrev">personligt-Brev</h1>
                    <img
                        src={bild3}
                        alt="bakrundsbild"
                        className="background-image"
                    />
                    <p className="content-text">
                        Mitt namn är Robin Kalkan och jag är passionerad när det kommer till att
                        skapa webblösningar som kombinerar kreativ design med effektiv
                        funktionalitet. Min ständiga strävan efter att lära mig och utvecklas inom
                        området har gett mig en förståelse för både front-end och back-end
                        teknologier. <br />
                        <br />
                        Under min tid som student har jag inte bara förbättrat mina färdigheter inom
                        HTML, CSS och JavaScript, React, Node.js. C# osv.
                        <br />
                        <br />
                        Jag har fortfarande mycket kvar att lära mig. Men jag brinner för kodning
                        och jag är övertygad om att min passion och min förmåga att lära mig nya
                        saker gör mig till en tillgång för alla projekt.
                        <br />
                        <br />
                        Med vänliga hälsningar,
                        <br />
                        <br />
                        Robin Kalkan.
                    </p>
                </main>

            </>
        </div>
    )
}