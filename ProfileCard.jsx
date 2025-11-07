export function ProfileCard(props,count,setCount,item){
    const handleProgress = () =>{
        if(count>=4){
            count=1;
        }else{
            setCount(count+1);
        }
    }

    return(
        <div>
            <section>
                <h2>【名前】{props.sample}</h2>
                <p>【年齢】歳</p>
                <p>【自己紹介】</p>
                <button onClick={handleProgress}>次のプロフィールへ</button>
            </section>
        </div>
    );
}