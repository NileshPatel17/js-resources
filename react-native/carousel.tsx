import React, { useRef } from 'react';
import { Text, View, StyleSheet, Image, FlatList, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window')
interface IImage {
    key: string;
    url: string;
    description: string;
}
const IMAGES = [
    {
        key: '1',
        url: 'https://nileshpatel17.github.io/js-resources/images/Eu1tbDoUYAULB0e.jpg',
        description: ' Hanuman'
    },
    {
        key: '2',
        url: 'https://nileshpatel17.github.io/js-resources/images/krishna.jpg',
        description: 'Krishna'
    },
    {
        key: '3',
        url: 'https://nileshpatel17.github.io/js-resources/images/1360047647948562434.jpg',
        description: 'Lakhman Mandir'
    },
    {
        key: '4',
        url: 'https://nileshpatel17.github.io/js-resources/images/Et7p9GQUYAYnjvT.jpg'
    },
    {
        key: '5',
        url: 'https://nileshpatel17.github.io/js-resources/images/EvClfZkU4AAGkd_.jpg',
        description: 'Unity'
    },
    {
        key: '6',
        url: 'https://nileshpatel17.github.io/js-resources/images/EuroX0rU4Ag5FW-.jpg'
    }
]
interface CarouselProps { }

const IMAGE_WIDTH=width* .9;

const DOT_SIZE = 10
function Pagination({scrollX}) {
    // const inputRange=[-IMAGE_WIDTH,0,IMAGE_WIDTH]
  
    // const selIndex = scrollX/width;
    // console.log(selIndex)
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 2 }}>
            {
                IMAGES.map((_, index) => {
                    // const bgColor=scrollX.interpolate({
                    //     inputRange:[],
                    //     outputRange:[]
                    // })
                    // console.log(scrollX)
                    return (
                        <View key={index} style={{ marginRight: 4, width: DOT_SIZE, height: DOT_SIZE, borderRadius: DOT_SIZE / 2, backgroundColor: 'white', borderWidth:1, borderColor:'gray' }} />
                    )
                })

            }
        </View>
    )
}
const Carousel = (props: CarouselProps) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    return (
        <View style={styles.container}>
            {/* <Text>Carousel</Text> */}
            <Animated.FlatList
                data={IMAGES.map(item => item.url)}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.toString()}
                onScroll={
                    Animated.event(
                        [{
                            nativeEvent: {
                                contentOffset: {
                                    x: scrollX
                                }
                            }
                        }],
                        { useNativeDriver: true }
                    )}
                scrollEventThrottle={16}
                contentContainerStyle={{
                    marginVertical: 5,
                    borderWidth:2,
                    borderColor:'red'
                }}
                renderItem={
                    ({ item, index }) => {
                        const inputRange = [(index - 1) * width, index * width, (index + 1) * width]
                        const scale = scrollX.interpolate({
                            inputRange,
                            outputRange: [0.5, 1, 0.5]
                        })
                        const opacity = scrollX.interpolate({
                            inputRange,
                            outputRange: [0.4, 1, 0.4]
                        })
                        const translateX = scrollX.interpolate({
                            inputRange,
                            outputRange:[-300,0,150]
                        })
                        return (
                            <View style={{width, alignItems:'center'}}>
                                <Animated.Image source={{ uri: item }}
                                    style={{
                                        width:IMAGE_WIDTH, height: 300,
                                        // opacity,
                                        transform:[
                                            {
                                                // translateX,
                                                scale
                                            }
                                        ]
                                       
                                    }}
                                    resizeMode='cover'
                                />
                            </View>
                        )
                    }
                }
            />
            <Pagination scrollX={scrollX}/>
        </View>
    );
};

export default Carousel;

const styles = StyleSheet.create({
    container: {
        width: '100%',
    }
});
