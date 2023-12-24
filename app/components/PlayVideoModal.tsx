import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";

interface IPlayVideoModal {
  title: string;
  overview: string;
  youtubeUrl: string;
  state: boolean;
  changeState: any;
  release: number;
  age: number;
  duration: number;
}

const PlayVideoModal = ({
  title,
  overview,
  youtubeUrl,
  state,
  duration,
  age,
  release,
  changeState,
}: IPlayVideoModal) => {
  return (
    <Dialog open={state} onOpenChange={() => changeState(!state)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          {title}
          <DialogDescription>
            <div className="flex gap-x-2 items-center text-sm mt-3 mb-2">
              <p>{release}</p>
              <p className="border py-0.1 px-1 border-gray-300 rounded">
                +{age}
              </p>
              <p>{duration}h</p>
            </div>
          </DialogDescription>
          <DialogDescription>{overview}</DialogDescription>
        </DialogHeader>
        <iframe src={youtubeUrl} height={250} className="w-full"></iframe>
      </DialogContent>
    </Dialog>
  );
};

export default PlayVideoModal;
