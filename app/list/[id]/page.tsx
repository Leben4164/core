import { GetStaticProps, GetStaticPaths } from 'next';

// API 호출 함수
async function getPosts(id) {
    const res = await fetch(
        `http://127.0.0.1:8090/api/collections/information/records/${id}`,
        { cache: 'no-store' }
    );
    const data = await res.json();
    return data;
}

// StudentDetail 컴포넌트
const StudentDetail = ({ info }) => {
    return (
        <div>
            <h1>학생 정보</h1>
            <Information key={info.id} info={info} />
        </div>
    );
};

export default StudentDetail;

// Information 컴포넌트
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
    );
};

// getStaticPaths 함수: 미리 생성할 경로를 정의
export const getStaticPaths: GetStaticPaths = async () => {
    // 예시: 1에서 5까지의 id를 사용하여 경로를 미리 생성
    const ids = [1, 2, 3, 4, 5];
    const paths = ids.map((id) => ({
        params: { id: id.toString() },
    }));

    return {
        paths,
        fallback: 'blocking', // 'blocking'을 사용하여 빌드 시 생성되지 않은 경로도 처리
    };
};

// getStaticProps 함수: 페이지에 필요한 데이터를 가져옴
export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params;
    const info = await getPosts(id);

    return {
        props: {
            info,
        },
    };
};
