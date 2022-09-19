import { createAnimation } from "@ionic/react"

const useAnimation = () => {

  const bounceEnterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = createAnimation()
      .addElement(root?.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = createAnimation()
      .addElement(root?.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 0.2, opacity: '0.99', transform: 'scale(1.2)' },
        { offset: 0.4, opacity: '0.99', transform: 'scale(0.8)' },
        { offset: 0.6, opacity: '0.99', transform: 'scale(1.1)' },
        { offset: 0.8, opacity: '0.99', transform: 'scale(0.9)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return createAnimation()
      .addElement(baseEl)
      .easing('ease-in-out')
      .duration(750)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  const bounceLeaveAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = createAnimation()
      .addElement(root?.querySelector('ion-backdrop')!)
      .fromTo('opacity', 'var(--backdrop-opacity)', '0.01');

    const wrapperAnimation = createAnimation()
      .addElement(root?.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0.99', transform: 'scale(0.9)' },
        { offset: 0.75, opacity: '0.99', transform: 'scale(1.1)' },
        { offset: 1, opacity: '0', transform: 'scale(0)' },
      ]);

    return createAnimation()
      .addElement(baseEl)
      .easing('ease-in-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };


  const zoomEnterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = createAnimation()
      .addElement(root?.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = createAnimation()
      .addElement(root?.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return createAnimation()
      .addElement(baseEl)
      .easing('ease-in-out')
      .duration(750)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  const zoomLeaveAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = createAnimation()
      .addElement(root?.querySelector('ion-backdrop')!)
      .fromTo('opacity', 'var(--backdrop-opacity)', '0.01');

    const wrapperAnimation = createAnimation()
      .addElement(root?.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0.99', transform: 'scale(0.9)' },
        { offset: 1, opacity: '0', transform: 'scale(0)' },
      ]);

    return createAnimation()
      .addElement(baseEl)
      .easing('ease-in-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  return {
    bounce:{
      enter: bounceEnterAnimation,
      leave: bounceLeaveAnimation
    },
    zoom:{
      enter: zoomEnterAnimation,
      leave: zoomLeaveAnimation,
    }
  }
}

export default useAnimation