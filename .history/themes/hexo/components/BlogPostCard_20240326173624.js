import BLOG from '@/blog.config'
import Link from 'next/link'
import React from 'react'
import CONFIG_HEXO from '../config_hexo'
import { BlogPostCardInfo } from './BlogPostCardInfo'
// import Image from 'next/image'

const BlogPostCard = ({ index, post, showSummary, siteInfo }) => {
  const showPreview = CONFIG_HEXO.POST_LIST_PREVIEW && post.blockMap
  if (post && !post.page_cover && CONFIG_HEXO.POST_LIST_COVER_DEFAULT) {
    post.page_cover = siteInfo?.pageCover
  }
  const showPageCover = CONFIG_HEXO.POST_LIST_COVER && post?.page_cover && !showPreview
  //   const delay = (index % 2) * 200

  return (
<<<<<<< HEAD
=======
    <div
        key={post.id}
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
        className={`flex md:flex-row flex-col-reverse  ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}
        w-full md:h-64 h-80 justify-between overflow-hidden drop-shadow-md  
        border dark:border-black rounded-xl bg-white dark:bg-hexo-black-gray  `}>
>>>>>>> main

        <div
            className={`${CONFIG_HEXO.POST_LIST_COVER_HOVER_ENLARGE ? ' hover:scale-110 transition-all duration-150' : ''}`}
        >
            <div
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="800"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom"
                id='blog-post-card'
                key={post.id}
                className={`md:h-56 w-full flex justify-between md:flex-row flex-col-reverse ${CONFIG_HEXO.POST_LIST_IMG_CROSSOVER && index % 2 === 1 ? 'md:flex-row-reverse' : ''}
                    overflow-hidden border dark:border-black rounded-xl bg-white dark:bg-hexo-black-gray`}>

                {/* 文字内容 */}
                <BlogPostCardInfo index={index} post={post} showPageCover={showPageCover} showPreview={showPreview} showSummary={showSummary} />

                {/* 图片封面 */}
                {showPageCover && (
                    <div className="md:w-5/12 overflow-hidden">
                        <Link href={`${BLOG.SUB_PATH}/${post.slug}`} passHref legacyBehavior>
                            <div className='h-56 bg-center bg-cover hover:scale-110 duration-200' style={{ backgroundImage: `url('${post?.page_cover}')` }} />
                        </Link>
                    </div>
                )}

<<<<<<< HEAD
=======
          <div
            className={`flex mt-2 items-center ${showPreview ? 'justify-center' : 'justify-start'
              } flex-wrap dark:text-gray-500 text-gray-400 hover:text-indigo-700 dark:hover:text-indigo-400`}
          >
            <Link
              href={`/archive#${post?.date?.start_date?.substr(0, 7)}`}
              passHref
              className="font-light hover:underline cursor-pointer text-sm leading-4 mr-3">

              <i className="far fa-calendar-alt mr-1" />
              {post.date?.start_date || post.lastEditedTime}

            </Link>
          </div>

          {(!showPreview || showSummary) && !post.results && (
            <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '4', WebkitBoxOrient: 'vertical' }}
              className="replace h-full max-h-32 my-4 text-gray-700  dark:text-gray-300 text-sm leading-7">
              {post.summary}
            </p>
          )}

          {/* 搜索结果 */}
          {post.results && (
            <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm font-light leading-7">
              {post.results.map(r => (
                <span key={r}>{r}</span>
              ))}
            </p>
          )}

          {showPreview && (
            <div className="overflow-ellipsis truncate">
              <NotionPage post={post} />
>>>>>>> main
            </div>

        </div>

  )
}

export default BlogPostCard
