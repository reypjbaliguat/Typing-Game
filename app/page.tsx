import Header from "../components/Header";
import styles from "./page.module.css";
import PlayButton from "../components/PlayButton";
import TextContainer from "../components/TextContainer";
import TextInput from "../components/TextInput";

export default function Home() {
    return (
        <main className="flex basis-full justify-center">
            <div className="basis-4/5 flex-wrap">
                <Header />
                <TextContainer />
                <TextInput />
                <PlayButton />
            </div>
        </main>
    );
}
