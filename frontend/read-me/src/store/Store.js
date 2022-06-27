import create from 'zustand';

const useStore = create((set) => ({
    name: '',
    point: '',
    setName: (name) => set(() => ({ name })),
    setPoint: (point) => set(() => ({ point })),
}));

export default useStore;
export { useStore };