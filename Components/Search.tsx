// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
// import films from '../Helpers/filmsData'

import FilmItem from './FilmItem'

import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'
import { Film } from '../Helpers/filmsData'
import searchedFilms from '../Helpers/filmsData'

interface IProps {
    _films: Film[];
}

interface IState { }

class Search extends React.Component<IProps, IState>  {

    constructor(props: IProps) {
        super(props)
        // Ici on va créer les propriétés de notre component custom Search
        let searchedFilms = this.props._films
        // searchedFilms = []
    }
    _loadFilms() {

        getFilmsFromApiWithSearchedText("star")
            .then(
                (data) => {
                    console.log(data)
                })
            .catch();
        // this.props._films = data;

    }

    render() {

        let searchedFilms = this.props._films

        return (
            <View style={styles.main_container} >


                {/* <FilmItem />
                <View></View> */}


                <TextInput style={styles.textinput} placeholder='Titre du film' />
                <Button title='Rechercher' onPress={() => this._loadFilms()} />

                <FlatList
                    data={searchedFilms}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <FilmItem film={item} />} />

            </View>


        )
    }

}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    },
    content: {

        flexDirection: 'column'
    },
    header: {

        flexDirection: 'row'
    },
    date: {

    }
})

export default Search