import { RichText } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
	const {
		tag,
		heading,
		description,
		buttonText,
		buttonUrl,
		releases = [],
	} = attributes;

	return (
		<div className="padding-global">
			<div className="container-large">
				<div className="padding-section-medium">
					<div className="timeline18_component">
						<div className="margin-bottom margin-xxlarge display-inlineflex">
							<div className="max-width-large align-center">
								<div className="text-align-center">
									<div className="margin-bottom margin-xsmall flex">
										<div className="tag is-teal">
											<div className="text-size-small text-color-teal">
												<RichText.Content tagName="span" value={tag} />
											</div>
										</div>
									</div>
									<div className="margin-bottom margin-small">
										<RichText.Content
											tagName="h2"
											className="heading-style-h2 text-align-left"
											value={heading}
										/>
									</div>
									<RichText.Content
										tagName="p"
										className="text-size-medium text-align-left"
										value={description}
									/>
									<div className="margin-top margin-medium flex">
										<div className="button-group is-center">
											<a
												href={buttonUrl}
												className="button is-link is-icon w-inline-block"
											>
												<RichText.Content tagName="div" value={buttonText} />
												<div className="icon-embed-xxsmall w-embed">
													<svg
														width="16"
														height="16"
														viewBox="0 0 16 16"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M6 3L11 8L6 13"
															stroke="CurrentColor"
															strokeWidth="1.5"
														></path>
													</svg>
												</div>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="timeline17_content">
						<div className="timeline17_fade-overlay-left"></div>
						<div className="timeline17_list">
							{releases.map((item, i) => (
								<div className="timeline17_item" key={i}>
									<div className="timeline17_progress-wrapper">
										<div className="timeline17_progress-line is-small-mobile"></div>
										<div className="timeline17_circle"></div>
										<div className="timeline17_progress-line"></div>
									</div>
									<div className="timeline17_item-content">
										<div className="margin-bottom margin-xxsmall">
											<RichText.Content
												tagName="h3"
												className="heading-style-h6"
												value={item.version}
											/>
										</div>
										<RichText.Content tagName="p" value={item.desc} />
									</div>
								</div>
							))}
						</div>
						<div className="timeline17_fade-overlay-right"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Save;
