'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useOnClickOutside } from 'usehooks-ts'
import { DemoWrapper } from '@/components'

import './index.scss'

export default function ModalPage() {
  const [activeGame, setActiveGame] = useState<Game | null>(null)

  const ref = useRef(null)

  useOnClickOutside(ref, () => setActiveGame(null))

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActiveGame(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <DemoWrapper className='game-panel'>
      <ul className='list'>
        {GAMES.map((game) => (
          <motion.li
            layoutId={`card-${game.title}`}
            key={game.title}
            onClick={() => setActiveGame(game)}
            style={{ borderRadius: 8 }}
          >
            <motion.img
              layoutId={`image-${game.title}`}
              height={56}
              width={56}
              alt='Game'
              src={game.image}
              style={{ borderRadius: 12 }}
            />
            <div className='game-wrapper'>
              <div className='content-wrapper'>
                <motion.h4
                  layoutId={`title-${game.title}`}
                  className='game-title'
                >
                  {game.title}
                </motion.h4>
                <motion.p
                  layoutId={`description-${game.title}`}
                  className='game-description'
                >
                  {game.description}
                </motion.p>
              </div>
              <motion.button
                layoutId={`button-${game.title}`}
                className='button'
              >
                Get
              </motion.button>
            </div>
          </motion.li>
        ))}
      </ul>

      <AnimatePresence>
        {activeGame && (
          <motion.div
            className='game-panel__overlay'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeGame && (
          <div className='active-game'>
            <motion.div
              layoutId={`card-${activeGame.title}`}
              className='inner'
              ref={ref}
              style={{ borderRadius: 12 }}
            >
              <div className='header'>
                <motion.img
                  layoutId={`image-${activeGame.title}`}
                  height={56}
                  width={56}
                  alt='Game'
                  src={activeGame.image}
                  style={{ borderRadius: 12 }}
                />
                <div className='header-inner'>
                  <div className='content-wrapper'>
                    <motion.h4
                      layoutId={`title-${activeGame.title}`}
                      className='game-title'
                    >
                      {activeGame.title}
                    </motion.h4>
                    <motion.p
                      layoutId={`description-${activeGame.title}`}
                      className='game-description'
                    >
                      {activeGame.description}
                    </motion.p>
                  </div>
                  <motion.button
                    layoutId={`button-${activeGame.title}`}
                    className='button'
                  >
                    Get
                  </motion.button>
                </div>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.1,
                }}
                className='long-description'
              >
                {activeGame.longDescription}
              </motion.p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </DemoWrapper>
  )
}

interface Game {
  title: string
  description: string
  longDescription: string
  image: string
}

const GAMES: Game[] = [
  {
    title: '小米商城',
    description: '官网服务，新品首发',
    longDescription:
      '在小米商城，你可以随时随地购买小米官方正品、了解最新鲜的新品信息、参与享受各类活动优惠、查看即时物流、评价和分享喜欢的商品、查询附近的小米之家。小米商城同时为米粉们提供高品质客户服务及售后支持。',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/07/bc/46/07bc4640-2b08-cb60-027e-57eabb054a82/AppIcon-1x_U007emarketing-0-5-0-0-85-220-0.png/460x0w.png',
  },
  {
    title: '小米汽车',
    description: '先进的移动智能空间',
    longDescription: `购车：小米汽车核心亮点和技术参数介绍，可预约试驾，配置并定购你的小米汽车，支持在线处理提车待办事项。社区：了解小米汽车品牌资讯，交流用车体验，分享精彩车生活。车控：手机就是遥控器，远程控制，实时安防，轻松掌握车辆状态。商城：了解小米汽车周边好物，可选购量身定做的车辆精品配件，体验更美好的车生活。`,
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/26/83/e4/2683e423-ee83-8454-18d4-f6c760d60968/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/460x0w.png',
  },
  {
    title: '米家',
    description: '简单愉悦的智能生活体验',
    longDescription: `米家 App 是你家里的智能硬件管理平台，通过米家 App，你可以完成手机与智能硬件之间便捷快速的交互，并实现智能设备之间的互联互通。通过米家 App，你还可以获得智能家庭的酷玩资讯，完成高品质智能硬件的轻松选购。你与智能生活，只差一个米家 App 的距离。`,
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/be/0a/4c/be0a4c73-0f81-fd8c-4b0a-e061f4f2fc15/AppIcon-0-1x_U007emarketing-0-7-0-0-85-220-0.png/460x0w.png',
  },
  {
    title: '小米有品',
    description: '新人专享1000元大礼包',
    longDescription:
      '小米有品是小米旗下新生活方式电商平台， 致力于成为用户追求品质生活的首选平台，小米有品坚持用小米模式做生活消费品，为用户提供高品质、高颜值、有科技感的好产品，为生活提供全场景解决方案。',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/53/38/ec/5338ec03-bea3-810e-2d05-62d2a73ec994/AppIcon-1x_U007emarketing-0-6-0-0-85-220-0.png/460x0w.png',
  },

  {
    title: '小爱音箱',
    description: '体验 AI 音箱的智能生活',
    longDescription:
      '小米AI音箱官方应用，旨在帮助用户了解、使用这款人工智能硬件产品的手机客户端，初次上线，带来相当全面的能力，我们竭力为你打造最佳的“AI初体验”。',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/49/9c/73/499c7354-43fe-e081-ea63-e4e2b7cdd416/AppIcon-0-0-1x_U007emarketing-0-5-0-0-sRGB-85-220.png/460x0w.png',
  },
]
