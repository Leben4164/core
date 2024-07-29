
async function getPosts(id) {
    const res = await fetch(
      `http://127.0.0.1:8090/api/collections/information/records/${id}`,
      { cache: 'no-store' }
    );
    const data = await res.json();
    return data;
  }

export default async function StudentDetail({ 
        params: { id } ,
    }: {
        params: { id: string }
    }) {
    const info = await getPosts(id);
    console.log(info)
    return (
        <div>
            <h1>학생 정보</h1>
            <Information key={info} info={info} />
        </div>
    )
}

const Information = ({ info }: any) => {
    const { numberAndName, motiv, want } = info || {};
    return (
        <div>
            <h2>학번 이름 : {numberAndName}</h2>
            <h2>지원 동기 :</h2>
            <p>　{motiv}</p>
            <h2>하고 싶은 것 :</h2>
            <p>　{want}</p>
        </div>
    )
}