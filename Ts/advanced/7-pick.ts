{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  //비디오의 모든 정보를 받아오는 함수
  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://...',
      data: 'byte-data...',
    };
  }

  // Video 타입 중에서 일부 property만 pick 하여 만드는 새로운 type
  type MetadataType = Pick<Video, 'id' | 'title'>;
  //비디오의 메타 데이터만 받아오는 함수
  function getVideoMeatdata(id: string): MetadataType {
    return {
      id,
      title: 'video',
    };
  }
}
