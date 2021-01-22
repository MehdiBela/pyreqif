import * as React from "react";

class Header extends React.Component {
    render() {
        return(
            <header>
                <h1>Importer</h1>
                <div>Commencez par importer un fichier.</div>
                <p>
                    Vous pourrez ensuite associer les champs Redmine avec les données du fichier avant de lancer l'import vers Redmine.
                    Les colonnes ne contenant pas de données seront ignorées
                    la ligne d'entête est affichée pour facilier l'association avec les champs Redmine mais sera ignorée lors de l'imapct.
                </p>
            </header>
        )
    }
}

export default Header;