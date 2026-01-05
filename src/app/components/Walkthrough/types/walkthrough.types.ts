export interface WalkthroughItem {
  id: string;
  component: string;
  title: string;
  image: string;
  locked: boolean;
  unlockCondition?: () => boolean;
  hasTask?: boolean;
  taskCompleted?: boolean;
  comingSoon?: boolean;
}

export interface WalkthroughNavProps {
  currentIndex: number;
  items: WalkthroughItem[];
  onNavigate: (index: number) => void;
  completedTasks: string[];
  dict: any;
  lang: string;
}

export interface WalkthroughState {
  currentIndex: number;
  items: WalkthroughItem[];
  completedTasks: string[];
}

export interface LanguageSelectorProps {
  dict: any;
  lang: string;
}

export interface VolumeToggleProps {
  isMuted: boolean;
  onToggle: () => void;
  label: string;
}

export interface VideoProgress {
  [videoId: string]: {
    watched: boolean;
    watchedAt: number;
  };
}

export type Language = "en" | "es" | "fa" | "ar" | "pt";

export interface LanguageOption {
  code: Language;
  label: string;
}

export interface QuestSidebarProps {
  items: WalkthroughItem[];
  completedTasks: string[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  dict: any;
  lang: string;
}

export interface VideoControlsProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  lang: string;
}

export interface NodeProps {
  dict: any;
  lang: string;
  onVideoComplete?: () => void;
}

export interface VideoStageProps {
  dict: any;
  lang: string;
  videos: Record<Language, string>;
  storageKey: string;
  onVideoComplete?: () => void;
}

export interface GoodsProps {
  dict: any;
  lang: string;
}

export interface WhiteRabbitProps {
  dict: any;
  lang: string;
  onMintComplete?: () => void;
  hasCompleted?: boolean;
}

export interface ShopTheLooksProps {
  dict: any;
  lang: string;
  onComplete?: () => void;
  hasCompleted?: boolean;
}

export interface EatCakeProps {
  dict: any;
  lang: string;
  onComplete?: () => void;
  hasCompleted?: boolean;
}

export interface EmptyTheatreProps {
  dict: any;
  lang: string;
  onComplete?: () => void;
  hasCompleted?: boolean;
}

export interface DarkGlassProps {
  dict: any;
  lang: string;
  onComplete?: () => void;
  hasCompleted?: boolean;
}

export interface Tunnel58Props {
  dict: any;
  lang: string;
  onComplete?: () => void;
  hasCompleted?: boolean;
}

export interface BuildItProps {
  dict: any;
  lang: string;
  onComplete?: () => void;
  hasCompleted?: boolean;
}

export interface ShopNFT {
  id: number;
  image: string;
  animation: string;
}

export interface Profile {
  questStage: number;
}

export interface SuccessData {
  message: string;
  txHash?: string;
}

export interface ErrorData {
  message: string;
}
