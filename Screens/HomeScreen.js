import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect } from 'react'
import Header from '../components/home/Header'
import Post from '../components/home/Post'
import { ScrollView } from 'react-native'
import {POSTS } from '../data/posts'
import Bottom from '../components/home/Bottom'
import { db } from '../firebase'

const HomeScreen = () => {
    const [posts, setPosts] = useState([])

    /*useEffect(() => {
        db.collectionGroup('posts')
            .orderBy('createdAt', 'desc')
            .onSnapshot(snapshot => { 
                setPosts(snapshot.docs.map(post => ({ id: post.id, ...post.data() })))
            })
    }, []) */
  return (
    <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView>
            {POSTS.map((post, index) => (
                <Post post={post} key={index} />
            ))}
        </ScrollView>
        <Bottom />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
})

export default HomeScreen