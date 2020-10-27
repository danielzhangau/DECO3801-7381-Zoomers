import React, {Component} from 'react';
import { View, Alert, Image, Text } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import Leaderboard from 'react-native-leaderboard';

export default class HomeScreen extends Component {

    // state, save all the user in our application
    state = {
        // global user list
        globalData: [
            { name: 'Thor Chen', miles: null, profileUrl: 'https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59094043-stock-illustration-profile-icon-male-avatar.jpg' },
            { name: 'Dan Zhang', miles: 12, profileUrl: 'https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png' },
            { name: 'Jack Xu', miles: 244, profileUrl: 'https://image.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg' },
            { name: 'Jona Chu', miles: 0, profileUrl: 'https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg' },
            { name: 'Leslie Cha', miles: 20, profileUrl: 'https://static.witei.com/static/img/profile_pics/avatar4.png' },
            { name: 'Edan K Zhao', miles: 92, profileUrl: 'https://image.freepik.com/free-vector/woman-profile-cartoon_18591-58480.jpg' },
            { name: 'Eva Hersberg', miles: 101, profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShPis8NLdplTV1AJx40z-KS8zdgaSPaCfNINLtQ-ENdPvrtMWz' },
            { name: 'Jonna Oliva', miles: 41, profileUrl: 'https://cdn.dribbble.com/users/2364329/screenshots/5930135/aa.jpg' },
            { name: 'Vivien Chen', miles: 95, profileUrl: 'https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg' },
            { name: 'Peter Scalt', miles: 22, profileUrl: 'https://cdn.dribbble.com/users/223408/screenshots/2134810/me-dribbble-size-001-001_1x.png' },
            { name: 'Harry Potter', miles: null, profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsSlzi6GEickw2Ft62IdJTfXWsDFrOIbwXhzddXXt4FvsbNGhp' },
            { name: 'Betty Burger', miles: 25, profileUrl: 'https://image.freepik.com/free-vector/woman-profile-cartoon_18591-58495.jpg' },
            { name: 'Lauren Leonard', miles: 30, profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr27ZFBaclzKcxg2FgJh6xi3Z5-9vP_U1DPcB149bYXxlPKqv-' },
        ],
        // friends user list
        friendData: [
            { name: 'Edan K Zhao', miles: 92, profileUrl: 'https://image.freepik.com/free-vector/woman-profile-cartoon_18591-58480.jpg' },
            { name: 'Eva Hersberg', miles: 101, profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShPis8NLdplTV1AJx40z-KS8zdgaSPaCfNINLtQ-ENdPvrtMWz' },
            { name: 'Jonna Oliva', miles: 41, profileUrl: 'https://cdn.dribbble.com/users/2364329/screenshots/5930135/aa.jpg' },
        ],
        filter: 0,
        userRank: 1,
        // current user
        user: {
            name: 'Edan K Zhao',
            miles: 92,
        }
    }
    
    alert = (title, body) => {
        Alert.alert(
            title, body, [{ text: 'OK', onPress: () => { } },],
            { cancelable: false }
        )
    }

    sort = (data) => {
        const sorted = data && data.sort((item1, item2) => {
            return item2.miles - item1.miles;
        })
        let userRank = sorted.findIndex((item) => {
            return item.name === this.state.user.name;
        })
        this.setState({ userRank: ++userRank });
        return sorted;
    }

    renderHeader() {
        return (
            <View
                style={{ backgroundColor: '#068D3C', padding: 15, paddingTop: 35, alignItems: 'center' }}>
                <Text style={{ fontSize: 35, color: 'white', fontFamily: 'Roboto-Bold' }}>Leaderboard</Text>
                <View style={{
                    flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                    marginBottom: 15, marginTop: 20
                }}>
                    <Text style={{ color: 'white', fontSize: 25, fontFamily: 'Roboto-Bold', flex: 1, textAlign: 'right', marginRight: 40 }}>
                        {ordinal_suffix_of(this.state.userRank)}
                    </Text>
                    <Image style={{ flex: .66, height: 60, width: 60, borderRadius: 60 / 2 }}
                        source={{ uri: 'https://image.freepik.com/free-vector/woman-profile-cartoon_18591-58480.jpg' }} />
                    <Text style={{ color: 'white', fontSize: 25, fontFamily: 'Roboto-Bold', flex: 1, marginLeft: 40 }}>
                        {this.state.user.miles}km
                    </Text>
                </View>
                <ButtonGroup
                    onPress={(x) => { this.setState({ filter: x }) }}
                    selectedIndex={this.state.filter}
                    buttons={['Global', 'Friends']}
                    containerStyle={{ height: 30 }} />
            </View>
        )
    }

    render() {
        const props = {
            labelBy: 'name',
            sortBy: 'miles',
            data: this.state.filter > 0 ? this.state.friendData : this.state.globalData,
            icon: 'profileUrl',
            onRowPress: (item, index) => { this.alert(item.name + " clicked", "You've Travelled " + item.miles + " km this week! Only Three days left to beat Jack") },
            sort: this.sort
        }

        return (
            <View style={{ flex: 1, backgroundColor: 'white', }}>
                {this.renderHeader()}
                <Leaderboard {...props} />
            </View>
        )
    }
}

const ordinal_suffix_of = (i) => {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}