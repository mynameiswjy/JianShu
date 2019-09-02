import styled from 'styled-components'

export const HomeWrap = styled.div`
	width: 960px;
	margin: 0 auto;
	padding-top: 30px;
	padding-left: 15px;
	display: flex;
	box-sizing: border-box;
	justify-content: space-between;
	.index_left {
		width: 625px;
	}
	.index_right {
		width: 280px;
	}
	.back_top {
		cursor: pointer;
    width: 50px;
    height: 50px;
    text-align: center;
    position: fixed;
    bottom: 60px;
    right: 60px;
    border: 1px solid #dcdcdc;
    background-color: #fff;
    transition: .1s ease-in;
    line-height: 50px;
    font-size: 15px;
    color: #666;
		user-select: none;
		cursor: pointer;
	}
`

export const SwiperWrap = styled.div`
	width: 625px;
	height: 270px;
	position: relative;
	margin-bottom: 35px;
	border-radius: 5px;
	cursor: pointer;
	overflow: hidden;
	.swiper_wrap {
		.home_banner {
			height: 270px;
			display: inline-block;
		}
	}
	.common-swiper-style {
		width: 40px;
		height: 50px;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background-color: rgba(0, 0, 0, .4);
		text-align: center;
		color: #fff;
		line-height: 50px;
		&.left {
			left: 0;
			border-top-right-radius: 6px;
    	border-bottom-right-radius: 6px;
		}
		&.right {
			right: 0;
			border-top-left-radius: 6px;
    	border-bottom-left-radius: 6px;
		}
	}
`;

export const Newslist = styled.ul`
	width: 625px;
	.read_more {
		width: 100%;
    border-radius: 20px;
    background-color: #a5a5a5;
    height: 40px;
    margin: 30px auto 60px;
    padding: 0 15px;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    color: #fff;
    box-sizing: border-box;
    cursor: pointer;
	}
`

export const ListItem = styled.li`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin: 0 0 15px;
	padding: 15px 2px 30px 0;
	border-bottom: 1px solid #f0f0f0;
	word-wrap: break-word;
`;

export const ListitemLeft = styled.div`
	max-width: 457px;
	position: relative;
	.h2 {
		margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    text-decoration: none;
    color: #333;
	}
	.p {
		margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
	}
`;

export const ItemLeftBott = styled.div`
	display: flex;
	font-size: 12px;
	position: absolute;
	bottom: 0;
	.p1 {
		color: #ea6f5a;
    font-weight: 400;
    margin-right: 10px;
	}
	.a2 {
		margin-right: 10px;
    color: #b4b4b4;
    cursor: pointer;
	}
	.p3 {
		margin-right: 10px;
    color: #b4b4b4;
    cursor: pointer;
	}
`

export const ListitemRight = styled.a`
	width: 150px;
	margin-top: -7px;
	img {
		width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
	}
`;

// 推荐
export const RecommendList = styled.div`
	width: 100%;
	margin-top: -4px;
`

export const RecItem = styled.a`
	  width: 100%;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
    display: block;
    cursor: pointer;
    .RecItem_img {
    	width: 100%;
    	min-height: 50px;
    	display: block;
    }
`;

// 二维码下载APP
export const DownloadWrapApp = styled.a`
	width: 100%;
	margin-bottom: 30px;
	padding: 10px 22px;
	border: 1px solid #f0f0f0;
	border-radius: 6px;
	background-color: #fff;
	box-sizing: border-box;
	margin-top: 10px;
	display: flex;
	.down_img {
		width: 60px;
    height: 60px;
    opacity: .85;
    margin-right: 15px;
	}
	.p1 {
		margin-top: 8px;
		font-size: 15px;
    color: #333;
    line-height: 21px;
	}
	.p2 {
		margin-top: 4px;
    font-size: 13px;
    line-height: 18px;
    color: #999;
	}
`;

// 作者推荐
export const AuthorsWrap = styled.div`
	width: 100%;
	.author_title {
		display: flex;
		font-size: 14px;
    color: #969696;
    justify-content: space-between;
	}
`;
