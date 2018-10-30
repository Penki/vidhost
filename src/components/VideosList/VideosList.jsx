import React, { Component } from 'react';
import VideoItem from './VideoItem'
import './VideosList.css'
export default class VideosList extends Component{
    render(){
        return(
            <div className="videos_list" >
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
            </div>
        )
    }
}